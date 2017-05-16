import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jquery'
import TestUtils from 'react-addons-test-utils'
import Clock from '../../components/Clock.jsx'

describe('Clock', () => {
    it('should exists', () => {
        expect(Clock).toExist();
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 615;
            let expected = '10:15';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected)
        });

        it('should format seconds when min/sec are less then 10', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let expected = '01:01';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected)
        });
    });
});
