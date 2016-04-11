/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing the input parameters directly.
     */
    export class LiteralCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([contents, ...]).
         */
        public render(parameters: string[]): LineResults {
            return LineResults.newSingleLine(parameters.slice(1).join(" "), false);
        }
    }
}
