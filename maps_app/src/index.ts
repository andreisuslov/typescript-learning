/*
We want to restrict the amount of API serface area that we exposed to the user. =>
=> We want to limit the number of things the user can do with this API.
They can only do things that are explicitly allowed.
*/

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
