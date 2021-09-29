## Button 按钮

Displays important alert messages.

### Basic usage

Alert components are non-overlay elements in the page that does not disappear automatically.

:::demo Alert provides 4 types of themes defined by `type`, whose default value is `info`.

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

### Theme

Alert provide two different themes, `light` and `dark`.

:::demo Set `effect` to change theme, default is `light`.

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

### Customizable close button

Customize the close button as texts or other symbols.

:::demo Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and the default is `true`. You can set `close-text` attribute to replace the default cross symbol as the close button. Be careful that `close-text` must be a string. `close` event fires when the component is closed.

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

### With icon

Displaying an icon improves readability.

:::demo Setting the `show-icon` attribute displays an icon that corresponds with the current Alert type.

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

## Centered text

Use the `center` attribute to center the text.

:::demo

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

### With description

Description includes a message with more detailed information.

:::demo Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

### With icon and description

:::demo At last, this is an example with both icon and description.

```js
function ChooseSeatDemo(props) {
    const [visible, setVisible] = React.useState(false);

    const handlePassRoomSeat = (arr) => {
        console.log(arr);
        setVisible(false);
    };
    const handleHideModal = () => {
        setVisible(false);
    };

    return (
        <div>
            <div>测试问题</div>
        </div>
    );
}
```

:::

### Attributes

| Attribute   | Description                                                | Type    | Accepted Values            | Default |
| ----------- | ---------------------------------------------------------- | ------- | -------------------------- | ------- |
| title       | title                                                      | string  | —                          | —       |
| type        | Component type                                             | string  | success/warning/info/error | info    |
| description | Descriptive text. Can also be passed with the default slot | string  | —                          | —       |
| closable    | If closable or not                                         | boolean | —                          | true    |
| center      | Whether to center the text                                 | boolean | —                          | false   |
| close-text  | Customized close button text                               | string  | —                          | —       |
| show-icon   | If a type icon is displayed                                | boolean | —                          | false   |
| effect      | Choose theme                                               | string  | light/dark                 | light   |

### Slot

| Name  | Description                |
| ----- | -------------------------- |
| —     | description                |
| title | content of the Alert title |

### Events

| Event Name | Description                | Parameters |
| ---------- | -------------------------- | ---------- |
| close      | fires when alert is closed | —          |
