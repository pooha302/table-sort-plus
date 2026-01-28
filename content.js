const initTableSorter = () => {
    if (typeof jQuery !== 'undefined' && $.isFunction($.fn.tablesorter)) {

        // Listen for Ctrl+Click on tables to check for tablesorter class
        $(document).on('click', 'table', function (event) {
            // Check if Ctrl key (or Cmd key on Mac) is pressed
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                const $table = $(this);
                const hasTableSorter = $table.hasClass('tablesorter');

                if (!hasTableSorter) {
                    // Apply tablesorter to the table
                    try {
                        $table.addClass('tablesorter').tablesorter({
                            theme: ""
                        });
                    } catch (error) {
                    }
                }
            }
        });
    } else {
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTableSorter);
} else {
    initTableSorter();
}
