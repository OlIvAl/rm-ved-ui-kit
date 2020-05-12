declare enum EGroup {
  ATTRACT = "attract",
  EXPANSION = "expansion",
  SERVICE = "service"
}

/**
 * Интерфейс Задачи.
 */
declare interface ITask {
  /**
   * Идентификатор.
   */
  id: string;
  /**
   * Наименование компании.
   */
  companyName: string;
  /**
   * Этап.
   */
  step: string;
  /**
   * Триггер.
   */
  trigger: string;
  /**
   * Группа триггера.
   */
  group: EGroup;
  /**
   * Признак замезения.
   */
  substituted: boolean;
  /**
   * Дата до начала выполнения задания.
   */
  startDeadline: number;
}

/**
 * Интерфейс свойств компонента.
 */
interface IProps {
  /**
   * Список задач.
   */
  tasks: ITask[];
}
