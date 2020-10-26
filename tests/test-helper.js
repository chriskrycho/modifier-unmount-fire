import Application from 'modifier-unmount-fire/app';
import config from 'modifier-unmount-fire/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
