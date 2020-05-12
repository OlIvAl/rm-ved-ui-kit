import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StylesProvider, StylesOptions } from "@material-ui/styles/";
import { Tasks } from "../Tasks";
import TASKS from "../tasks.json";

const generateClassName: StylesOptions["generateClassName"] = (
  rule,
  sheet
): string => `${sheet!.options.classNamePrefix}-${rule.key}`;

const provideTheme = (ui: ReactElement): ReactElement => {
  return (
    <StylesProvider generateClassName={generateClassName}>{ui}</StylesProvider>
  );
};

describe("Tasks", () => {
  it("render Tasks component with tasks array", done => {
    const { container } = render(
      provideTheme(<Tasks tasks={TASKS as ITask[]} />)
    );

    expect(container).toMatchSnapshot();
    done();
  });

  it("render Tasks component with one task", done => {
    const { container } = render(
      provideTheme(
        <Tasks
          tasks={[
            {
              id: "a2424224a6sf",
              companyName: "ООО Ромашка",
              step: "First",
              trigger: "Наименование триггера",
              group: "expansion" as any,
              substituted: false,
              startDeadline: 1588149769
            }
          ]}
        />
      )
    );

    expect(container).toMatchSnapshot();
    done();
  });

  it("render Tasks component with empty array", done => {
    const { container } = render(provideTheme(<Tasks tasks={[]} />));

    expect(container).toMatchSnapshot();
    done();
  });
});
