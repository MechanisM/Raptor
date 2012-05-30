/**
 * @fileOverview Float ui components
 * @author David Neilsen david@panmedia.co.nz
 * @author Michael Robinson michael@panmedia.co.nz
 */

 $.ui.editor.registerUi({

    /**
     * @name $.editor.ui.floatLeft
     * @augments $.ui.editor.defaultUi
     * @class Floats the selected or nearest block-level element left
     * <br/>
     * Toggles <tt>float: left</tt>
     */
    floatLeft: /** @lends $.editor.ui.floatLeft.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Float Left'),
                click: function() {
                    editor.toggleBlockStyle({
                        'float': 'left'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.floatRight
     * @augments $.ui.editor.defaultUi
     * @class Floats the selected or nearest block-level element right
     * <br/>
     * Toggles <tt>float: right</tt>
     */
    floatRight: /** @lends $.editor.ui.floatRight.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Float Right'),
                click: function() {
                    editor.toggleBlockStyle({
                        'float': 'right'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.floatNone
     * @augments $.ui.editor.defaultUi
     * @class Sets float none to the selected or nearest block-level element
     * <br/>
     * Toggles <tt>float: right</tt>
     */
    floatNone: /** @lends $.editor.ui.floatNone.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Float None'),
                click: function() {
                    editor.toggleBlockStyle({
                        'float': 'none'
                    }, editor.getElement());
                }
            });
        }
    }
});