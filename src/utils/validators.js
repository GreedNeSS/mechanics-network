export const required = value => {
	if (value) {
		return undefined;
	}

	return 'Обязательное поле';
}

const maxLength = max => value => {
	if (value && value.length > max) {
		return `Максимальное количество символов ${max}`
	}

	return undefined;
}

export const maxLength15 = maxLength(15);
export const maxLength30 = maxLength(30);
export const maxLength50 = maxLength(50);