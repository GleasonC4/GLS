/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for declaring a dictionary type.
     */
    export class DictionaryTypeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("keyType", "The type of the keys.", true),
            new Parameters.SingleParameter("valueType", "Tye type of the values", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return DictionaryTypeCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        public render(parameters: string[]): LineResults {
            let output: string = "";

            if (this.language.properties.dictionaries.initializeAsNew) {
                output += this.language.properties.dictionaries.className;
            }

            if (this.language.properties.classes.generics.used) {
                output += this.language.properties.dictionaries.typeLeft;
                output += this.context.convertCommon("type", parameters[1]);
                output += this.language.properties.dictionaries.typeMiddle;
                output += this.context.convertCommon("type", parameters[2]);
                output += this.language.properties.dictionaries.typeRight;
            }

            return LineResults.newSingleLine(output, false);
        }
    }
}