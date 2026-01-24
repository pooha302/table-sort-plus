const initTableSorter = () => {
    if (typeof jQuery !== 'undefined' && $.isFunction($.fn.tablesorter)) {
        console.log(`%c TableSort+: jQuery & Tablesorter Ready!`, 'color: #00f2ff; font-weight: bold;');

        // Listen for Ctrl+Click on tables to check for tablesorter class
        $(document).on('click', 'table', function (event) {
            // Check if Ctrl key (or Cmd key on Mac) is pressed
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                const $table = $(this);
                const hasTableSorter = $table.hasClass('tablesorter');

                console.log(`%c TableSort+: Table Ctrl+Clicked`, 'color: #ff9d00; font-weight: bold;');
                console.log('Table element:', this);
                console.log('Has tablesorter class:', hasTableSorter);

                if (!hasTableSorter) {
                    // Apply tablesorter to the table
                    try {
                        $table.addClass('tablesorter').tablesorter();
                        console.log('%c Tablesorter applied successfully!', 'color: #00ff88; font-weight: bold;');
                    } catch (error) {
                        console.error('Failed to apply tablesorter:', error);
                    }
                }
            }
        });
    } else {
        console.error("TableSort+: jQuery or Tablesorter failed to load.");
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTableSorter);
} else {
    initTableSorter();
}
