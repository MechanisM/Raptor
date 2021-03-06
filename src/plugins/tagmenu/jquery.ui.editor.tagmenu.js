/**
 * @fileOverview UI Component for a tag-change select menu
 * @author David Neilsen david@panmedia.co.nz
 * @author Michael Robinson michael@panmedia.co.nz
 */
$.ui.editor.registerUi({

    /**
     * @name $.editor.plugin.tagMenu
     * @augments $.ui.editor.defaultPlugin
     * @class Select menu allowing users to change the tag for selection
     */
    tagMenu: /** @lends $.editor.plugin.tagMenu.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor) {
            editor.bind('selectionChange', this.change, this);
            editor.bind('show', this.change, this);

            return editor.uiSelectMenu({
                name: 'tagMenu',
                title: _('Change HTML tag of selected element'),
                select: $(editor.getTemplate('tagmenu.menu')),
                change: function(value) {
                    editor.tagSelection(value);
                }
            });
        },

        /**
         * Content changed event
         */
        change: function() {
            var tag = this.editor.getSelectedElements()[0];
            if (!tag) return;
            tag = tag.tagName.toLowerCase();
            if (this.ui.selectMenu.find('option[value=' + tag + ']').length) {
                this.ui.val(tag);
            } else {
                this.ui.val('na');
            }
        }
    }
});
