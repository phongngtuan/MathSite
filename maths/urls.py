"""maths app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from maths import views
from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

router = DefaultRouter()
router.register(r'questions', views.QuestionViewSet)
router.register(r'papers', views.PaperViewSet)
router.register(r'topics', views.TopicViewSet)
router.register(r'levels', views.LevelViewSet)
router.register(r'subjects', views.SubjectViewSet)
router.register(r'figures', views.FigureViewSet)

questions_router = routers.NestedSimpleRouter(router, r'questions', lookup='question')
questions_router.register(r'answers', views.AnswerViewSet)
urlpatterns = [
        url(r'^api/auth/login/$', views.LoginView.as_view(), name='login'),
        url(r'^api/upload/$', views.FileUploadView, name='upload'),
        url(r'^api/checkAnswer/$', views.checkAnswer, name='checkAnswer'),
        url(r'^api/', include(router.urls)), 
        url(r'^api/', include(questions_router.urls)),
        url(r'^$', views.index, name='index'), 
]
