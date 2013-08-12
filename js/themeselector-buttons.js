
/** 
 * Method: addActionButton
 * Add a button to a theme in the theme selector
 * 
 * Parameters:
 * themes - {<Theme>} 
 * options - {Object}
 *         - callback
 *         - className
 *         - title
 */

Gui.ThemeSelector.prototype.addActionButton = function(theme,options) {
	
}

if (Gui.ThemeSelector.ThemeStore) {

	Gui.ThemeSelector.ThemeStore.prototype.addActionButton = function(theme,options) {
        var expander = jQuery('#'+theme.name+' .no-expander');
        var e = jQuery('<div class="'+(options.className || '')+'" title="'+(options.title || '')+'"/>');
        e.click(options.callback);
		jQuery('#'+theme.name+' .actions').append(e);
        if (expander.length) {
            expander.removeClass('no-expander').addClass('expander').addClass('down');
    		this.setExpander(theme.name);
        }
	}
	
}

if (Gui.ThemeSelector.Classic) {

	Gui.ThemeSelector.Classic.prototype.addActionButton = function(theme,options) {
		var actions = jQuery('#theme_div_'+theme.name+' .actions');
		if (actions.length == 0) {
			actions = jQuery('<div class="actions classicActions"></div>');
			jQuery('#theme_div_'+theme.name).prepend(actions);
		}
        var e = jQuery('<div class="'+(options.className || '')+'" title="'+(options.title || '')+'"/>');
        e.click(options.callback);
		actions.append(e);
	}
	
}

