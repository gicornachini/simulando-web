from django.conf.urls import url
from django.contrib import admin

from api.views import QuestionList, UserLeadList

urlpatterns = [
    url(r'^questions/$', QuestionList.as_view(), name='questions'),
    url(r'^leads/$', UserLeadList.as_view(), name='leads'),
]
