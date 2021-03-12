import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from props should by in span", () => {
		let component;
		act(() => {
			component = create(<ProfileStatus status="Ruslan is Senior" userId='2' />);
		});
		let instance = component.root;
		const span = instance.findByType("span");
		expect(span.props.children[1]).toBe("Ruslan is Senior");
	});

	test("if a span is displayed then there should be no input", () => {
		let component;
		act(() => {
			component = create(<ProfileStatus status="Ruslan is Senior" userId='2' />);
		});
		let instance = component.root;

		expect(() => {
			const input = instance.findByType("input");
		}).toThrow();
	});

	test("input should be displayed status in edit mode", () => {
		let component;

		act(() => {
			component = create(<ProfileStatus status="Ruslan is Senior" />);
		});

		let instance = component.root;
		const span = instance.findByType("span");

		act(() => {
			span.props.onDoubleClick();
		})

		const input = instance.findByType("input");
		expect(input.props.value).toBe("Ruslan is Senior");
	});

	test("edit mode should not appear when loading someone else's user", () => {
		let component;

		act(() => {
			component = create(<ProfileStatus status="Ruslan is Senior" userId='2' />);
		});

		let instance = component.root;
		const span = instance.findByType("span");

		expect(() => {
			act(() => {
				span.props.onDoubleClick();
			})
		}).toThrow();
	});

	test("edit mode should not appear when loading someone else's user", () => {
		let component;
		const mockCallback = jest.fn((data) => data)
		act(() => {
			component = create(<ProfileStatus status="Ruslan is Senior"
				updateStatus={mockCallback} />);
		});

		let instance = component.root;
		const span = instance.findByType("span");

		act(() => {
			span.props.onDoubleClick();
		})

		const input = instance.findByType("input").simulate('change', {
			target: {
				value: 'somenewpassword  ',
			},
		});

		expect(input.prop('value')).toEqual(
			'somenewpassword',
		);

	});
});