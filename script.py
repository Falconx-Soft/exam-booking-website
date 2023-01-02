import selenium
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import datetime
import schedule
from selenium import webdriver

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import os
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import Select


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Core.settings")
import django
django.setup()

from django.conf import settings
from django.core.mail import send_mail

from home.models import info, got_address, got_date, got_time
from home.views import format_date

def automation(driver,db_info,email,start_date,end_date):
    # select dropdown element test_sponsor
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.ID,'test_sponsor')))
    select = Select(driver.find_element(By.ID,'test_sponsor'))
    # select by visible text
    select.select_by_visible_text(db_info.test_sponsor)

    time.sleep(3)

    # select dropdown element testProgram
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.ID,'testProgram')))
    select = Select(driver.find_element(By.ID,'testProgram'))
    # select by visible text
    select.select_by_visible_text(db_info.test_program)

    time.sleep(3)

    # select dropdown element testSelector
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.ID,'testSelector')))
    select = Select(driver.find_element(By.ID,'testSelector'))
    # select by visible text
    select.select_by_visible_text(db_info.test_test)

    time.sleep(3)

    # next button
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.ID,'nextBtn')))
    driver.find_element(By.ID,'nextBtn').click()

    # next page
    # You must select an end date that is within 2 weeks of the selected start date. MM-DD-YYYY
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.XPATH,'//*[@id="google-maps"]/div/app-geo-locator/input')))
    driver.find_element(By.XPATH,'//*[@id="google-maps"]/div/app-geo-locator/input').send_keys(db_info.address)

    time.sleep(3)

    driver.find_element(By.XPATH,'/html/body/app-root/app-scheduling/div/div[1]/app-find-availability-location/div/app-location-selector/div/div[3]/div[1]/label/datepicker-demo/div/input').send_keys(start_date)

    time.sleep(3)

    driver.find_element(By.XPATH,'/html/body/app-root/app-scheduling/div/div[1]/app-find-availability-location/div/app-location-selector/div/div[3]/div[2]/label[1]/datepicker-demo/div/input').clear()
    driver.find_element(By.XPATH,'/html/body/app-root/app-scheduling/div/div[1]/app-find-availability-location/div/app-location-selector/div/div[3]/div[2]/label[1]/datepicker-demo/div/input').send_keys(end_date)

    time.sleep(3)
    next_btn = driver.find_element(By.ID,'nextBtn')
    driver.execute_script("arguments[0].scrollIntoView(true);", next_btn)
    next_btn.click()


    try: 
        print("-------> In try")
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,'//*[@id="content-wrapper"]/div[3]/div[1]/div/h2')))
        driver.find_element(By.XPATH,'//*[@id="content-wrapper"]/div[3]/div[1]/div/h2').get_attribute("innerHTML") == "No availability found. Please select a new location or date range above."
        print("BS khtam ta ta bye bye finish")
        return False
    except:
        print("-------> In except")
        WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.XPATH,'//*[@id="content-wrapper"]/div[3]/div[2]/div')))
        get_content_div = driver.find_element(By.XPATH,'//*[@id="content-wrapper"]/div[3]/div[2]/div')
        list = get_content_div.find_elements(By.TAG_NAME,'fieldset')

        info = []
        for l in list:
            temp_info = []

            WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.TAG_NAME,'h2')))

            print(l.find_element(By.TAG_NAME,'h2').text)

            got_address_obj = got_address.objects.create(info=db_info, address=l.find_element(By.TAG_NAME,'h2').text)
            got_address_obj.save()

            temp_info.append(l.find_element(By.TAG_NAME,'h2').text)
            box_div = l.find_elements(By.TAG_NAME,'div')[7]
            list_btn = box_div.find_elements(By.XPATH,'div[@role = "button"]')
            print(len(list_btn),"Button")
            date_list = []
            for btn in list_btn:
                date = btn.text
                print("-----------> 1")
                print(date.replace("\n", " "))

                got_date_obj = got_date.objects.create(address=got_address_obj, date=date.replace("\n", " "))
                got_date_obj.save()

                date_list.append(date.replace("\n", " "))
                driver.execute_script("arguments[0].scrollIntoView(true);", btn)
                print("-----------> 2")
                time.sleep(5)
                btn.click()
                try:
                    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.TAG_NAME,'app-slot-card-detail')))
                    print("-----------> 3")
                    time_div = driver.find_element(By.TAG_NAME,'app-slot-card-detail')
                    print("-----------> 4")
                    time_list = time_div.find_elements(By.CLASS_NAME,"testCentreTimeSlot")
                    info_time_list = []
                    for t in time_list:
                        print("-----------> 5")
                        print(t.text)
                        got_time_obj = got_time.objects.create(date=got_date_obj,time=t.text)
                        got_time_obj.save()
                        info_time_list.append(t.text)
                        print("-----------> 6")
                    date_list.append(info_time_list)
                except:
                    info_time_list = []
                    info_time_list.append("No seat available")
                    date_list.append(info_time_list)
            temp_info.append(date_list)
            info.append(temp_info)

        print("***************")
        print(info)

        subject = 'Seats are available'
        message = 'Your seats are available'+'\n'.join(map(str,info))
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email,]
        send_mail(subject, message, email_from, recipient_list)

        return True


def run_script():
    try:
        info_obj = info.objects.filter(got_result = False)

        print("<-----------------")
        options = Options()
        options.headless = True

        driver = webdriver.Firefox(options=options)
        time.sleep(3)

        for i in info_obj:
            date_time_obj_1 = datetime.datetime.strptime(i.start_date, '%m/%d/%Y')
            date_time_obj_2 = datetime.datetime.strptime(i.end_date, '%m/%d/%Y')
            today = datetime.datetime.today()

            start_date = ""
            end_date = ""

            if((date_time_obj_2 - today).days > 0):
                if((date_time_obj_1 - today).days > 0):
                    print("if",(date_time_obj_1 - today).days)
                    if (date_time_obj_2 - date_time_obj_1).days > 14:
                        print(1,date_time_obj_1.date(),"--",(date_time_obj_1 + datetime.timedelta(days=13)).date())
                        start_date = format_date(str(date_time_obj_1.date()))
                        end_date = format_date(str((date_time_obj_1 + datetime.timedelta(days=13)).date()))
                    else:
                        print(2,date_time_obj_1.date(),"--",date_time_obj_2.date())
                        start_date = format_date(str(date_time_obj_1.date()))
                        end_date = format_date(str(date_time_obj_2.date()))
                else:
                    print("if",(date_time_obj_1 - today).days)
                    if (date_time_obj_2 - date_time_obj_1).days > 14:
                        if (date_time_obj_2 - today).days > 14:
                            print(3,(today + datetime.timedelta(days=1)).date(),(today + datetime.timedelta(days=13)).date())
                            start_date = format_date(str((today + datetime.timedelta(days=1)).date()))
                            end_date = format_date(str((today + datetime.timedelta(days=13)).date()))
                        else:
                            print(4,(today + datetime.timedelta(days=1)).date(),date_time_obj_2.date())
                            start_date = format_date(str((today + datetime.timedelta(days=1)).date()))
                            end_date = format_date(str(date_time_obj_2.date()))
                    else:
                        print(5,(today + datetime.timedelta(days=1)).date(),date_time_obj_2.date())
                        start_date = format_date(str((today + datetime.timedelta(days=1)).date()))
                        end_date = format_date(str(date_time_obj_2.date()))

                print("****",i.id,"****")
                print("*****",start_date,"<--->",end_date,"*******")
                try:
                    driver.get('https://proscheduler.prometric.com/scheduling/searchAvailability')

                    chk = automation(driver,i,i.user.email,start_date,end_date)

                    if chk == True:
                        i.got_result = True
                        i.save()
                except Exception as e:
                    print("------Inner Except--------->",e,"<---------------")
            else:
                print("---------------Expire----------------")

        driver.quit()
    except Exception as e:
        print("------Outer Except--------->",e,"<---------------")


#run_script()

schedule.every(30).minutes.do(run_script)
  
while True:
   schedule.run_pending()
