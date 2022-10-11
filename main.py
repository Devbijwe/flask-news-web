import email
import os
from unicodedata import name
from warnings import catch_warnings
from flask import Flask, redirect,render_template, request,session
from jinja2 import Template
import json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy 
from flask_ngrok import run_with_ngrok
from flask_mail import Mail
from sqlalchemy.exc import IntegrityError 
with open("config.json","r") as c:
    params=json.load(c)['params']
local_server=True
app = Flask(__name__,template_folder="templates")
app.config.update(
MAIL_SERVER ='smtp.gmail.com',
MAIL_PORT ='465',
MAIL_USE_SSL=True,
MAIL_USERNAME=params['gmail_user'],
MAIL_PASSWORD=params['gmail_pswd'])
mail=Mail(app)
app.secret_key = 'super-secret-key'


if(local_server):
    app.config['SQLALCHEMY_DATABASE_URI'] = params['local_url']
else:
    app.config['SQLALCHEMY_DATABASE_URI'] =  params['prod_url']
db= SQLAlchemy(app)
class Login(db.Model):
    srNo=db.Column(db.Integer,primary_key=True)
    firstname=db.Column(db.String(30),nullable=False)    
    secname=db.Column(db.String(30),nullable=False)
    mobile=db.Column(db.String(15),nullable=False)
    email=db.Column(db.String(30),nullable=False)
    password=db.Column(db.String(30),nullable=False)
    address_country=db.Column(db.String(30),nullable=False)
    date=db.Column(db.String(12),nullable=True)

class Contact(db.Model):
    srNo = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    mobile = db.Column(db.String(14),nullable=False )
    email = db.Column(db.String(25),nullable=False)
    address = db.Column(db.String(50),nullable=False)
    feedback = db.Column(db.String(500), nullable=False)
    date = db.Column(db.String(12),nullable=True)

@app.route("/")
def index():
    return render_template("index.html",params=params)
@app.route("/international")
def international():
    return render_template("international.html",params=params)
@app.route("/national")
def national():
    return render_template("national.html",params=params)
@app.route("/sports")
def sports():
    return render_template("sports.html",params=params)
@app.route("/health")
def health():
    return render_template("health.html",params=params)
@app.route("/business")
def current_affairs():
    return render_template("business.html",params=params)
@app.route("/technology")
def technology():
    return render_template("technology.html",params=params)
@app.route("/entertainment")
def entertainment():
    return render_template("entertainment.html",params=params)
@app.route("/signup",methods=['GET','POST'])
def signup():
   status=""
   if(request.method=='POST'):
    fname=request.form.get("firstName")
    sname=request.form.get("secondName")
    phone=request.form.get("phoneNo")
    email=request.form.get("email")
    password=request.form.get("password")
    address=request.form.get("Address_Country")
    cred=Login(firstname= fname, secname= sname,mobile=phone,email=email,    password=password,address_country=address,date=datetime.now())
    try:
        db.session.add(cred)
        db.session.commit()
        return render_template("login.html",params=params)
    except IntegrityError:
        status="user "+ str(phone) +" already exists in our database"
        return render_template("signup.html",params=params,status=status)
        
   else:
    status=""
    return render_template("signup.html",params=params,status=status)

@app.route("/login",methods=['GET','POST'])
def login():
    if "user" in session:   # session['user']==params['admin_username']
        cred=Login.query.all()
        return render_template('index.html',params=params)
    if(request.method=='POST'):
        username=request.form.get("username") 
        password=request.form.get("password")
        cred=Login.query.filter_by(mobile=username).first()
        if (username==cred.mobile and password==cred.password):
            session['user']=username
            # cred=Login.query.all()
            return render_template('index.html',params=params)
        else:
            return render_template('login.html',params=params)
            
    else:
        return render_template('login.html',params=params)
@app.route("/logout")
def logout():
    if "user" in session: 
        session.pop("user")
    return redirect("/")
@app.route("/contact",methods=['GET','POST'])
def contact():
    if "user" in session:
        if(request.method=='POST'):
            fname=request.form.get("fname")    
            lname=request.form.get("lname") 
            email=request.form.get("email")
            mobile=request.form.get("mobile") 
            address=request.form.get("address") 
            feedback=request.form.get("comment")
            entry=Contact(name=fname+" "+ lname,email=email,mobile=mobile,    feedback=feedback,address=address,date=datetime.now())
            db.session.add(entry)
            db.session.commit()
            mail.send_message(
            'New message from '+fname+ " "+lname,
            sender=email,
            recipients=[params['gmail_user'],email],
            body=feedback+ "\nAddress:"+address+"\nMobile no: "+mobile+"\nDate:"+str( datetime.now())
        )
        return render_template("contact.html",params=params)
    else:
          return render_template("login.html",params=params)


@app.context_processor
def inject_user():
    cred=''
    mobile=''
    email=''
    address=''
    name=''
    User=False
    if "user" in session:
        user=session['user']
        cred=Login.query.filter_by(mobile=user).first()
        cred=cred
        name=cred.firstname+" "+cred.secname
        mobile=cred.mobile
        email=cred.email
        address=cred.address_country
        User=True
    return dict(user=cred,userIn=User,name=name,mobile=mobile,email=email,address=address)   

if __name__=="__main__":
    app.run(debug=True)