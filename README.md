this project is devoloped by mr mahajan nilesh navnath as a first round of coding challenge given by causecode for placement.
for any query contact on nileshnmahajan@gmail.com or 9975720525.



this is a web based projet which uses python-django frmework and python as a server side language.
it uses html, css, js obiusly no another frontend available yet :(
currennly it uses sqlite3 database because its lightweight and good for testing but for large scale need to transefer to mysql or mongodb.




first you need python3 to run this priject on any system and django python package instaled.

there is one file run_me.cmd which work in windows after you install python and django package by pip install django
this file check any update in django if not installed it install django so it work even if only oython3 and pip is available.
it start server then on port no 80 and you can access it on 127.0.0.1, localhost or your local ip on same system but for different system you have to add your local ip in allowed host list which is located in /social_network/settings.py file


you can start server mannually as change directary to root of this project where manage.py located 
and fire command as python manage.py runserver ip:port
  ex python manage.py runserver 127.0.0.1:80
    it staert on 127.0.0.1
   if you want it work on all ip mention above then give ip as 0.0.0.0:80
        then it run on all local ip's assign to your system
        
        
   some time in linux need to command as python3 manage.py runserver 0.0.0.0:80
   
   
   
   after servert start without any error open any your ip on browser
   
   
   currently this site work in resolution 1080 wide or more better in future after use media query its work better in mobile device also
   
   
   then you can signup or allreay does then login after login you see one empty box with some option at top as b,i, a colors add image which is a for share post to your frind
   
   
   you can search friends add them see there post like comment 
      currently share is not activated yet 
   
   
 this project tested on windows 10, i3 processor, python 3.7.4
