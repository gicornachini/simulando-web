from django.db import models


class QuestionManager(models.Manager):
    use_for_related_fields = True

    def free(self, **kwargs):
        return self.filter(freequestion__isnull=False, **kwargs).order_by('freequestion__order')
