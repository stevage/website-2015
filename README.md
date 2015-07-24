healthhack.com.au website
=======

This is the source for the Health Hack website (static HTML) - it is written using [middleman](http://middlemanapp.com).

NOTE: This README is part of the 'slim' branch - a cut down version of the site which has A LOT of cruft removed. If you add something new to the site, please add a description here. 

To help develop the site you'll need to install middleman.

Getting started: The "shut my eyes and run stuff" approach
----------

    # On a clean Ubuntu Precise:
    sudo apt-get install -y curl git-core ruby-bundler rubygems nodejs

    \curl -sSL https://get.rvm.io | bash -s stable --ruby
    source ~/.rvm/scripts/rvm
    git clone https://github.com/HealthHackAu/website-2015.git
    cd website 

    bundle install

    # Build the content:
    middleman build

    # Run locally:
    middleman server

Getting started: the more considered approach
----------

Follow these instructions apart from bits you know already and you can
just ignore :D.

You need the following:

+ RVM or similar (basic install instructions
  [here](https://rvm.io/rvm/install) )

+ Check out the source code for the website:


```
    https://github.com/HealthHackAu/website-2015.git
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
----------

You can keep the server running, make changes to the source files and
rebuild the site files. Should be a fairly low-friction workflow.

+ Edit files in the source folder, for example source/index.html.markdown.erb
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
----------

Do this!

Editing pages
----------

Pages with .markdown in the file extension are built in kramdown
Check out (http://kramdown.rubyforge.org/syntax.html) for syntax

Working with specific pages:
----------

As of June 2015 there are specific page types that need content:

All paths are given relative to the 'source' folder

Sponsors:
----------

The erb file containing sponsor-related markup is located at:


```
    partials/_sponsors.erb
```

Any related images should be placed in:


```
    images/sponsors
```

Past Challenges (on the main page):
----------
This is handled in:


```
    index.html.markdown.erb
```

Challenges:
----------

The erb file containing challenges related markup is located at:


```
    challenges.html.markdown.erb
```

Challenges data should be added here:


```
    data/challenges.json
```

The challenges data template is here:


```
    partials/_challengesTemplate.erb
```

There are currently no related images for this page

Organisers:
----------

The erb file containing organisers related markup is located at:


```
    organisers.html.markdown.erb
```

Organiser data should be added here:


```
    data/organisers.json
```

The organiser data template is here:


```
    partials/_organiserTemplate.erb
```

Any related images should be placed in:


```
    images/organisers
```

Images should be named "firstname.lastname.ext" and organisers *should* be added to the page in alphabetical order.

Locations:
----------

Each of the four locations has its own page located at:


```
    locations/city.erb
```

The images for each city are located at:


```
    images/locations/city.png
```

NOTE: If you are taking responsibility for updating a cities page then you need to modify the <p>Area Location/Date</p> field in:


```
    index.html.markdown.erb
```