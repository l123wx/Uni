import type { StoryObj } from '@storybook/vue3'
import { Button } from '../'

export default {
  title: 'Button',
}

export const ButtonBasic: StoryObj = {
  render: () => ({
    template: `
      <Button>Uni Button</Button>
    `,
    components: {
      Button,
    },
  }),
}
