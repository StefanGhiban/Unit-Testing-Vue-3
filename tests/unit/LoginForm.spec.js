import LoginFrom from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
    it('emits an event with a user data payload', () => {
        const wrapper = mount(LoginFrom)
        const input = wrapper.find('input[type="text"]')
        input.setValue('AdamJahr')
        wrapper.trigger('submit')

        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)

        const expectedPayload = { name: 'AdamJahr'}
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })
})