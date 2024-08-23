from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import QuestionViewSet, QuizSubmissionViewSet

router = DefaultRouter()
router.register(r'questions', QuestionViewSet)
router.register(r'submissions', QuizSubmissionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]