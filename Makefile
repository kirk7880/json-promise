REPORTER = spec
test:
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@$(MAKE) lint
	@$(MAKE) test-coveralls
lint:
	./node_modules/.bin/jshint ./test ./index.js

test-cov:
	@NODE_ENV=test ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha -- -R spec

test-coveralls:
	@NODE_ENV=test ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && \
		cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js --verbose

.PHONY: test