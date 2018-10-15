import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import * as Steps from "screener-runner/src/steps";

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from "@storybook/addon-knobs";

import Button from "./Button.vue";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => {
    const story = storyFn();
    story.steps = new Steps()
      .snapshot('default', { cropTo: '.Button' })
      .hover('.Button')
      .snapshot('hover', { cropTo: '.Button' })
      .mouseDown('.Button')
      .snapshot('pressed', { cropTo: '.Button' })
      .end()
    return story;
  })
  .add("Default", () => ({
    components: { Button },
    template: `<Button @click="click"> ${text( "Text", "Button")} </Button>`,
    methods: { click: action("clicked") }
  }));
