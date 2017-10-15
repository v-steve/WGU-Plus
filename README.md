WGU+ Chrome Extension
==========

Installing
-----

WGU+ is currently available on the Chrome Webstore via the following link:

[WGU+](https://chrome.google.com/webstore/detail/wgu+/chaofigalhkdhmphgaanmpbapfjlpjpd)

Description
-----

This chrome extension gives you a "Quick Links" option on the right your current course's pages. This appears directly above the Course Mentor/Announcements/etc options.
Once your course has been added to the extension, you will see quick links to uCertify, Lynda, SimLab, and other relevent study material.

<img src="https://github.com/bamhm182/WGU-Plus/blob/master/screenshots/WGU%2B%20Example.png"/>

Issues
-----

There are no known issues at this time.

If you find any, please let us know: [Issue Tracker](https://github.com/bamhm182/WGU-Plus/issues)

Contributing
-----

If your class is not already added, or if you would like to add additional resources, please clone this repository, make your changes, and request a comit.
If you are unfamiliar with Git, feel free to open an Issue with information about the resource you would like to add.

Resources are added to a <CLASS_ID>.txt file in the links folder.

<CLASS_ID> can be pulled from the class's URL on my.wgu.edu. For example: <br/>
8080002: https://my.wgu.edu/courses/course/8080002/course-material<br/>
7040001: https://my.wgu.edu/courses/course/7040001/course-material<br/>


Within this file, you will find each resource on its own line in the following format:<br/>
LINK_TYPE | LINK_NAME            | LINK

<b>LINK_TYPE</b>: The type of resource you are adding. The resource should be all one word. Examples are provided below.<br/>
<b>LINK_NAME</b>: This will be displayed to the right of the icon. For example: Lynda or Lynda\<br/\>(Mike Meyers).<br/>
<b>LINK</b>: The URL to the resource.<br/>

Before submitting a link, please ensure that it is the most generic form. For example, if I click on a link to open uCertify, I may be taken to https://wgu.ucertify.com/?func=load_course&course=WGU-220-902-complete&class_code=00000&chapter_no=1 . This link has more information that it needs to have and may bring the user to a specific part of the course instead of the course overall. Instead, shorten the link to https://wgu.ucertify.com/?func=load_course&course=WGU-220-902-complete

Additionally, WGU links to materials via a provision link that looks something like this: https://lrps.wgu.edu/provision/123456789 <br/>
At the time I'm writing this, I believe those links to be universal and think they should be fine to use.

Accepted Resources
==========
LINK_TYPE
-----
<b>NOTE</b>: Capitilzation doesn't matter, LINK_TYPEs should be all one word. If they're not in the list below, they will have a generic book icon.

acrobatiq
cbtnuggets
doc
hawkes
lynda
pdf
skillsoft
testout
ucertify
vitalsource
