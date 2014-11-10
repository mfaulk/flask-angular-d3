# flask-angular-d3

Replace {staging} and {production} with the name of the Heroku apps, e.g.  ancient-badlands-3739

'''bash
heroku config:set APP_SETTINGS=config.StagingConfig --app {staging}
'''

## Local configuration

'''bash 
virtualenv env
pip install -r requirements.txt
source local_setup.sh
createdb flask-angular-d3.dev
'''

## Heroku Remote

'''bash
heroku addons:add heroku-postgresql:dev
'''

heroku config should now yield something like
'''
=== ancient-badlands-3739 Config Vars
APP_SETTINGS:                config.StagingConfig
DATABASE_URL:                postgres://odowblxamzlpez:gaIlj8xtYkZ6Z2WAeWrBppO1RM@ec2-54-204-39-187.compute-1.amazonaws.com:5432/de43bb3qnfrtaf
HEROKU_POSTGRESQL_MAUVE_URL: postgres://odowblxamzlpez:gaIlj8xtYkZ6Z2WAeWrBppO1RM@ec2-54-204-39-187.compute-1.amazonaws.com:5432/de43bb3qnfrtaf
'''