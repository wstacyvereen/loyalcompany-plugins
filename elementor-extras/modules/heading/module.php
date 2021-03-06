<?php
namespace ElementorExtras\Modules\Heading;

use ElementorExtras\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Module extends Module_Base {

	public function get_name() {
		return 'heading';
	}

	public function get_widgets() {
		return [
			'Heading',
			'Text_Divider'
		];
	}
}
