<?php
namespace ElementorExtras\Modules\Navigation\Skins;

// Elementor Classes
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Skin_Classic extends Skin_Base {

	public function get_id() {
		return 'classic';
	}

	public function get_title() {
		return __( 'Classic', 'elementor-extras' );
	}

	protected function _register_controls_actions() {
		parent::_register_controls_actions();

		// add_action( 'elementor/element/posts-extra/section_query/after_section_end', [ $this, 'register_parallax_controls' ] );
	}

	public function register_layout_content_controls() {
		parent::register_layout_content_controls();

	}
}