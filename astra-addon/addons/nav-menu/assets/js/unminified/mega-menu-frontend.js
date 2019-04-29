var items = document.getElementsByClassName('astra-megamenu-li');

[].slice.call(items).forEach(function(container) {
    jQuery( container ).hover( function() {

        var ast_container = jQuery(container).parents( '.ast-container' ),
            $main_container = ast_container.children(),
            $full_width_main_container = ast_container.parent(),
            $this            = jQuery( this );

        // Full width mega menu
        if( $this.hasClass( 'full-width-mega' ) ) {
            $main_container = jQuery( $main_container ).closest('.ast-container' );
        }

        if ( parseInt( jQuery(window).width() ) > parseInt( astra.break_point ) ) { 

            var $menuWidth           = $main_container.width(),     
                $menuPosition        = $main_container.offset(), 
                $menuItemPosition    = $this.offset(),
                $positionLeft        = $menuItemPosition.left - ( $menuPosition.left + parseFloat($main_container.css('paddingLeft') ) );

            var $fullMenuWidth           = $full_width_main_container.width(),
                $fullMenuPosition        = $full_width_main_container.offset(),
                $fullPositionLeft        = $menuItemPosition.left - ( $fullMenuPosition.left + parseFloat( $full_width_main_container.css( 'paddingLeft' ) ) );

            if( $this.hasClass( 'menu-container-width-mega' ) ) {
                $target_container = jQuery(".main-navigation");
                $menuWidth           = $target_container.width() + 'px';
                var $offset_right    = jQuery(window).width() - ( $target_container.offset().left + $target_container.outerWidth() );
                var $current_offset  = $this.offset();
                var $width           = ( jQuery(window).width() - $offset_right ) - $current_offset.left;
                $positionLeft        = parseInt( $target_container.width() - $width );
            }
            if( $this.hasClass( 'full-width-mega' ) ) {
                $this.find( '.astra-full-megamenu-wrapper' ).css( { 'left': '-'+$fullPositionLeft+'px', 'width': $fullMenuWidth } );
                $this.find( '.astra-megamenu' ).css( { 'width': $menuWidth } );
            } else{
                $this.find( '.astra-megamenu' ).css( { 'left': '-'+$positionLeft+'px', 'width': $menuWidth } );
            }
        } else {
            $this.find( '.astra-megamenu' ).css( { 'left': '', 'width': '', 'background-image': '' } );
            $this.find( '.astra-full-megamenu-wrapper' ).css( { 'left': '', 'width': '', 'background-image': '' } );
        }
    } );
});

// Achieve accessibility for megamenus using focusin on <a>.
[].slice.call(items).forEach(function(container) {

    var ast_container = jQuery(container).parents( '.ast-container' ),
        $main_container = ast_container.children(),
        $full_width_main_container = ast_container.parent(),
        $this            = jQuery( container );

    // Full width mega menu
    if( $this.hasClass( 'full-width-mega' ) ) {
        $main_container = jQuery( $main_container ).closest('.ast-container' );
    }

    $this.find( '.menu-link' ).focusin(function( e ) {
        $this.find( '.sub-menu' ).addClass( 'astra-megamenu-focus' );
        $this.find( '.astra-full-megamenu-wrapper' ).addClass( 'astra-megamenu-wrapper-focus' );
        if ( parseInt( jQuery(window).width() ) > parseInt( astra.break_point ) ) { 

            var $menuWidth           = $main_container.width(),     
                $menuPosition        = $main_container.offset(), 
                $menuItemPosition    = $this.offset(),
                $positionLeft        = $menuItemPosition.left - ( $menuPosition.left + parseFloat($main_container.css('paddingLeft') ) );

            var $fullMenuWidth           = $full_width_main_container.width(),
                $fullMenuPosition        = $full_width_main_container.offset(),
                $fullPositionLeft        = $menuItemPosition.left - ( $fullMenuPosition.left + parseFloat( $full_width_main_container.css( 'paddingLeft' ) ) );

            if( $this.hasClass( 'menu-container-width-mega' ) ) {
                $target_container = jQuery(".main-navigation");
                $menuWidth           = $target_container.width() + 'px';
                var $offset_right    = jQuery(window).width() - ( $target_container.offset().left + $target_container.outerWidth() );
                var $current_offset  = $this.offset();
                var $width           = ( jQuery(window).width() - $offset_right ) - $current_offset.left;
                $positionLeft        = parseInt( $target_container.width() - $width );
            }
            if( $this.hasClass( 'full-width-mega' ) ) {
                $this.find( '.astra-full-megamenu-wrapper' ).css( { 'left': '-'+$fullPositionLeft+'px', 'width': $fullMenuWidth } );
                $this.find( '.astra-megamenu' ).css( { 'width': $menuWidth } );
            } else{
                $this.find( '.astra-megamenu' ).css( { 'left': '-'+$positionLeft+'px', 'width': $menuWidth } );
            }
        } else {
            $this.find( '.astra-megamenu' ).css( { 'left': '', 'width': '', 'background-image': '' } );
            $this.find( '.astra-full-megamenu-wrapper' ).css( { 'left': '', 'width': '', 'background-image': '' } );
        }
    });

    $this.find( '.menu-link' ).keydown(function (e) {    
      if (e.which  == 9 && e.shiftKey) {
        $this.find( '.sub-menu' ).removeClass( 'astra-megamenu-focus' );
        $this.find( '.astra-full-megamenu-wrapper' ).removeClass( 'astra-megamenu-wrapper-focus' );
      }
    });

    jQuery( container ).find( '.sub-menu .menu-item' ).last().focusout(function() {
        $this.find( '.sub-menu' ).removeClass( 'astra-megamenu-focus' );
        $this.find( '.astra-full-megamenu-wrapper' ).removeClass( 'astra-megamenu-wrapper-focus' );
    });

    jQuery(window).click(function() {
        $this.find( '.sub-menu' ).removeClass( 'astra-megamenu-focus' );
        $this.find( '.astra-full-megamenu-wrapper' ).removeClass( 'astra-megamenu-wrapper-focus' );
    });

    $this.click(function(event){
        event.stopPropagation();
    });
});