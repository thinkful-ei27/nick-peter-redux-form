export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value => value.trim() ? undefined : 'Please fill in this field';

export const isValidTrackingNumber = value => value.length === 5 ? undefined : 'Tracking number must be 5 characters long';

export const isNumber = value => Number(value) ? undefined : 'Tracking number must only be numbers';