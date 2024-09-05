import type { StoryObj } from '@storybook/vue3'
import { Button } from '../'

export default {
  title: 'Button',
}

export const ButtonBasic: StoryObj = {
  render: () => ({
    template: `
      <Button @click="handleButtonClick">Uni Button</Button>
    `,
    components: {
      Button,
    },
    setup() {
      const handleButtonClick = () => {
        // eslint-disable-next-line no-console
        console.log('click')
      }

      return { handleButtonClick }
    },
  }),
}
