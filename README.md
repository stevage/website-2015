healthhack.com.au website
=======

This is the source for the Health Hack website (static HTML) - it is written using [middleman](http://middlemanapp.com).

NOTE: This README is part of the 'slim' branch - a cut down version of the site which has A LOT of cruft removed. If you add something new to the site, please add a description here. 

To help develop the site you'll need to install middleman.

Getting started. Using the dev scripts:
----------

    # On a clean Ubuntu Precise:
    sudo apt-get install -y curl git-core ruby-bundler rubygems nodejs

    \curl -sSL https://get.rvm.io | bash -s stable --ruby
    source ~/.rvm/scripts/rvm
    git clone https://github.com/HealthHackAu/website-2015.git
    
    cd website-2015
    bundle install

    # Build the content:
    middleman build

    # Run locally:
    middleman server

This will start serving the site and give you an address to go to in
your browser.

If you're on the organising team and want to develop on the website you can find more instructions here:
https://healthhack-2015.slack.com/archives/website/p1440762529000002

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

If you're going to be doing a lot of work on the site and you're not able to push changes to the main repo then please ask for permission to do so. Otherwise, make your changes and submit a pull request. 

Editing pages
----------

Pages with .markdown in the file extension are built in kramdown
Check out (http://kramdown.rubyforge.org/syntax.html) for syntax

Style
----------

Please use 4 spaces instead of tabs. I hate tabs.

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
    <city>.erb
```

The images for each city are located at:


```
    images/locations/<city>.png
```

The data asscoiated with the locations pages is located at:

```
    data/locations.json
```