ci:test build deploy

test:
	yarn test

build:
	yarn build

deploy:
	@echo 'deploy'
	scp -r dist/* root＠49.234.128.231:/data/htdocs/yd-book
