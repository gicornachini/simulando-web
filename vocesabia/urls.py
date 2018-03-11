from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include('api.urls')),
    url(r'^perguntas/', TemplateView.as_view(template_name="freequestion/index.html")),
]
