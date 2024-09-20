from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.template import loader
from .models import Manager

def index(request):
    man = Manager.objects.all().values()
    #output = ""
    template = loader.get_template('tempy.html')
    context = {
        'man' : man,
    }
   # for x in man:
    #    output += x["Firstname"]
    #return HttpResponse(output)
    #template = loader.get_template('tempy.html')
    return HttpResponse(template.render(context, request))
# Create your views here.
def ad(request):
    template = loader.get_template('ad.html')
    return HttpResponse(template.render({}, request))

def adrecord(request):
    w = request.POST['first']
    x = request.POST['last']
    y = request.POST['num']
    z = request.POST['email']
    mana = Manager(Firstname=w, Lastname=x, number=y, email=z)
    mana.save()
    return HttpResponseRedirect(reverse('index'))
 
def delete(request, id):
    mana = Manager.objects.get(id=id)
    mana.delete()
    return HttpResponseRedirect(reverse('index'))

def update(request, id):
    manage = Manager.objects.get(id=id)
    template = loader.get_template('update.html')
    context = {
        'manage' : manage,
    }
    return HttpResponse(template.render(context, request))

def updaterecord(request, id):
    first = request.POST['first']
    last = request.POST['last']
    num = request.POST['num']
    email = request.POST['email']
    mana = Manager.objects.get(id=id)
    mana.Firstname = first
    mana.Lastname = last
    mana.number = num
    mana.email = email
    mana.save()
    return HttpResponseRedirect(reverse('index'))