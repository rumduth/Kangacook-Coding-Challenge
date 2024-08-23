from django.db import models

class Question(models.Model):
    text = models.CharField(max_length=255)
    choices = models.JSONField()
    correct_answer = models.IntegerField()

class QuizSubmission(models.Model):
    user_name = models.CharField(max_length=100)
    score = models.IntegerField()
    submitted_at = models.DateTimeField(auto_now_add=True)