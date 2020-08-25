type Component<ComponentData> = (componentData: ComponentData) => object;

export const component = <ComponentData>(name: string, _component: Component<ComponentData>) => {
  const div = document.querySelector(`[data-component="${name}"]`) as HTMLElement;

  if (div === null) {
    throw Error(`Could not find component with selector [data-component="${name}"].`);
  }

  const componentData = div.dataset.componentData ? JSON.parse(div.dataset.componentData) : {};

  const state = _component(componentData);

  // @ts-ignore
  if (!window.components) {
    // @ts-ignore
    window.components = {};
  }

  // @ts-ignore
  window.components[name] = () => state;
};
