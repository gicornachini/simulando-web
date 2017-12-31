# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class UserLead(models.Model):
    """ Model to warehouse all leads. """
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)