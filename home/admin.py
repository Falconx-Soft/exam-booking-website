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

admin.site.register(check_box)
admin.site.register(radio_btn)