import selenium
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
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

def automation(driver,db_info,email):
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

    driver.find_element(By.XPATH,'/html/body/app-root/app-scheduling/div/div[1]/app-find-availability-location/div/app-location-selector/div/div[3]/div[1]/label/datepicker-demo/div/input').send_keys(db_info.start_date)

    time.sleep(3)

    driver.find_element(By.XPATH,'/html/body/app-root/app-scheduling/div/div[1]/app-find-availability-location/div/app-location-selector/div/div[3]/div[2]/label[1]/datepicker-demo/div/input').clear()
    driver.find_element(By.XPATH,'/html/body/app-root/app-scheduling/div/div[1]/app-find-availability-location/div/app-location-selector/div/div[3]/div[2]/label[1]/datepicker-demo/div/input').send_keys(db_info.end_date)

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
    info_obj = info.objects.filter(got_result = False)

    print("<-----------------")
    options = Options()
    options.headless = True

    driver = webdriver.Firefox(options=options)
    time.sleep(3)

    for i in info_obj:
        driver.get('https://proscheduler.prometric.com/scheduling/searchAvailability')

        chk = automation(driver,i,i.user.email)

        if chk == True:
            i.got_result = True
            i.save()

    driver.quit()


run_script()

# schedule.every(30).minutes.do(run_script)
  
# while True:
#     schedule.run_pending()

