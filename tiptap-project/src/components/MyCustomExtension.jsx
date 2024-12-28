import { Extension } from "@tiptap/core";

const MyCustomExtension = Extension.create({
  name: "highlightText",

  addOptions() {
    return {
      customColor: "yellow",
    };
  },

  addCommands() {
    return {
      highlight:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { backgroundColor: this.options.customColor })
            .run();
        },
    };
  },
});

export default MyCustomExtension;
