from django.conf.urls import url
from django.contrib import admin

from api.views import AllQuestionsAPIView

urlpatterns = [
    url(r'^questions/$', AllQuestionsAPIView.as_view(), name='questions'),
]
