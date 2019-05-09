/*
 * Copyright (c) 2018-present PowerFlows.org - all rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Input, Output} from './field.model';
import {ExpressionType} from './expression.model';
import {Rule} from './rule.model';
import {EvaluationMode} from './evaluation.mode';

export class Decision {
  id: string;
  name: string;
  hitPolicy: HitPolicy;
  expressionType: ExpressionType;
  evaluationMode: EvaluationMode;
  inputs: Array<Input>;
  outputs: Array<Output>;
  rules: Array<Rule>;
}

export enum HitPolicy {
  UNIQUE = 'UNIQUE',
  FIRST = 'FIRST',
  ANY = 'ANY',
  PRIORITY = 'PRIORITY',
  COLLECT = 'COLLECT',
  RULE_ORDER = 'RULE_ORDER',
  OUTPUT_ORDER = 'OUTPUT_ORDER'
}
