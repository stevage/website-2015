HealthHackMelb.com website
=======

This is the source for the HealthHackMelb website - it is written using [middleman](http://middlemanapp.com).

The site is actually static HTML that is generated and pushed to an AWS S3 bucket. Right now we build it locally on our machines and push to S3. Middleman happily takes care of all of this.

Getting started
--------------

Follow these instructions apart from bits you know already and you can
just ignore :D.

You need the following:

+ RVM or similar (basic install instructions
  [here](https://rvm.io/rvm/install) )

+ Check out the source code for the website:

```
   git clone git@github.com:healthhack-melb/website.git
```

Or use the GitHub client.

+ cd into the directory and you will be given a prompt to activate the
  rvmrc file that tells RVM which ruby and gemset to use - type in
  'yes' here

+ Install the gems:

```
  bundle install
```

+ To build the website:

```
   middleman build
```

This generates all the static html to a folder called build/

+ To see the website running:

```
   middleman server
```

This will start serving the site and give you an address to go to in
your browser.

Changing + previewing
-----

You can keep the server running, make changes to the source files and
rebuild the site files. Should be a fairly low-friction workflow.

+ Edit files in the source folder, for example source/index.html.erb
  (the template file for the home page)
+ Rebuild:

```
   middleman build
```

+ Your changes should be available from the same address as before -
  if the server is not running start it again:
  
```
   middleman server
```

Checking in your changes!
--------

You don't technically need to do this to deploy, but please do - else
if I deploy and I don't have your changes, your changes are history!

Assuming some basic GH workflow stuff is covered, but I can help with
that over the next 48 hours.

Deploying to the live site
----------

As I said before, this is just a case of generating the site and
syncing it with the S3 bucket sitting behind
(http://healthhackmelb.com). OK that doesn't sound simple, luckily
enough a middleman gem does the hard work for us.

+ One time setup! You need to make sure you have a file called
  'secret' in the root of the project. This has the credentials for s3
  deployment so it obviously does not go into github. I will send this
  file to anyone who needs to do deployment.
  
+ Firstly make sure everything is built:

```
   middleman build
```

Then deploy:

```
   ./deploy.sh
```

This has a bunch of warnings/errors due to a bug in one of the
components it uses ("Invalid Excon request keys: :scheme, :host"). But
if you go to (http://healthhackmelb.com) your changes will be there!


Editing pages
----------

Pages with .markdown in the file extension are built in kramdown
Check out (http://kramdown.rubyforge.org/syntax.html) for syntax


