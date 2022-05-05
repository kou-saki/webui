import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { Option } from 'app/interfaces/option.interface';
import { TreeNodeProvider } from 'app/modules/ix-forms/components/ix-explorer/ix-explorer.component';

export interface DynamicFormSchema {
  name: string;
  description: string;
  schema: DynamicFormSchemaNode[];
}

export type DynamicFormSchemaNode =
| DynamicFormSchemaInput
| DynamicFormSchemaSelect
| DynamicFormSchemaExplorer
| DynamicFormSchemaCheckbox
| DynamicFormSchemaDict
| DynamicFormSchemaList;

export interface DynamicFormSchemaBase {
  controlName: string;
  title?: string;
  required?: boolean;
  hidden?: boolean;
  editable?: boolean;
  indent?: boolean;
}

export interface DynamicFormSchemaInput extends DynamicFormSchemaBase {
  type: 'input';
  tooltip?: string;
  private?: boolean;
  placeholder?: string;
}

export interface DynamicFormSchemaSelect extends DynamicFormSchemaBase {
  type: 'select';
  tooltip?: string;
  options?: Observable<Option[]>;
}

export interface DynamicFormSchemaExplorer extends DynamicFormSchemaBase {
  type: 'explorer';
  tooltip?: string;
  nodeProvider?: TreeNodeProvider;
}

export interface DynamicFormSchemaCheckbox extends DynamicFormSchemaBase {
  type: 'checkbox';
  tooltip?: string;
}

export interface DynamicFormSchemaList extends DynamicFormSchemaBase {
  type: 'list';
  items?: DynamicFormSchemaNode[];
  items_schema?: any[];
}

export interface DynamicFormSchemaDict extends DynamicFormSchemaBase {
  type: 'dict';
  attrs?: DynamicFormSchemaNode[];
}

export interface AddListItemEmitter {
  array: FormArray;
  schema: any[];
}

export interface DeleteListItemEmitter {
  array: FormArray;
  index: number;
}
