from django.contrib import admin
from .models import *
# Register your models here.

class InfoAdmin(admin.ModelAdmin):
	list_display = ('user', 'test_sponsor','test_program','test_test','address','start_date','end_date','got_result')
	search_fields = ('user',)

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()

admin.site.register(info,InfoAdmin)

admin.site.register(got_address)
admin.site.register(got_date)
admin.site.register(got_time)

class check_box_Admin(admin.ModelAdmin):
	list_display = ('info', 'value')
	search_fields = ('info',)

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()

admin.site.register(check_box,check_box_Admin)

class radio_btn_Admin(admin.ModelAdmin):
	list_display = ('info', 'value')
	search_fields = ('info',)

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()
admin.site.register(radio_btn,radio_btn_Admin)