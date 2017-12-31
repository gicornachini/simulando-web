from rest_framework import serializers

from lead.models import UserLead

class UserLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLead
        fields = ('id', 'email')