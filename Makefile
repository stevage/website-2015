all:
	bundle exec middleman build
init:
	bundle install
clean:
	rm -rf build
