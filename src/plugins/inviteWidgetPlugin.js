import {findAndReplace} from 'mdast-util-find-and-replace';

const inviteWidgetPlugin = () => {
    const widgetMarkupRegex = /@gg\/([a-zA-Z0-9-_]+)/g;

    return (markdownAST) => {
        markdownAST.children.unshift({
            type: 'import',
            value: "import InviteWidget from '@site/src/components/InviteWidget.jsx';",
        });

        const replace = (match) => [
            {
                type: 'jsx',
                value: `<InviteWidget invite="${match.substring(4)}"/>`,
            },
        ];

        // Use a do-while loop instead of while to avoid the unnecessary first assignment to 'found'
        let found;
        do {
            found = findAndReplace(markdownAST, widgetMarkupRegex, replace);
        } while (found);

        return markdownAST;
    };
};

module.exports = inviteWidgetPlugin;
