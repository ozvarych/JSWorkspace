$(document).ready(function(){
	$('.particle-box').particles({
			// PARTICLE SETTINGS
			num_particles:100,			// NUMBER OF ANIMATED PARTICLES
			min_distance:50,			// DISTANCE TO DRAW LINE
			particle_size:3,			// SIZE OF PARTICLES (0=RANDOM)
			max_size:5,					// MAXIMUM PARTICLE RADIUS
			particle_color:'#ffffff',	// PARTICLE COLOR
			switch_color:false,			// RANDOMLY SELECT DIFFERENT COLORS DURING ANIMATION
			particle_shape:'circle',	// PARTICLE SHAPE ('CIRCLE','LINE')
			particle_width:3,			// USED WITH PARTICLE_SHAPE LINES
			max_particle_width:3,		// MAXIMUM PARTICLE WIDTH
			particle_height:0,			// USED WITH PARTICLE_SHAPE LINES
			max_particle_height:0,		// MAXIMUM PARTICLE HEIGHT
			// GENERAL SETTINGS
			canvas_color:'transparent',	// BACKGROUND COLOR (#HEX, TRANSPARENT OR BLEND)
			speed_x:0.3,					// SPEED FACTOR ALONG X AXIS
			max_speed_x:2,				// MAXIMUM SPEED ALONG X AXIS			
			speed_y:0.3,					// SPEED FACTOR ALONG Y AXIS
			max_speed_y:2,				// MAXIMUM SPEED ALONG Y AXIS
			velocity_x:1,				// VELOCITY FACTOR ALONG X AXIS
			velocity_y:1,				// VELOCITY FACTOR ALONG Y AXIS
			acceleration_x:0.01,		// ACCELERATION SPEED FACTOR ALONG X AXIS (0=RANDOM)
			acceleration_y:0.01,		// ACCELERATION SPEED FACTOR ALONG X AXIS (0=RANDOM)
			// LINE SETTINGS
			draw_line:true,				// DRAWS LINES WHEN PARTICLES ARE CLOSE
			line_color:'#ffffff',		// LINE COLOR
			line_width:2,				// WIDTH OF LINES
			line_type:'line',		// LINE, BEZIER, QUAD OR RANDOM
			control_point_a_x:true,		// FIRST CONTROL POINT X WHEN USING BEZIER LINE TYPE (0=RANDOM, TRUE=USE POINT POSITION)
			control_point_a_y:true,		// FIRST CONTROL POINT Y WHEN USING BEZIER LINE TYPE (0=RANDOM, TRUE=USE POINT POSITION)
			control_point_b_x:true,		// SECOND CONTROL POINT X WHEN USING BEZIER LINE TYPE (0=RANDOM, TRUE=USE POINT POSITION)
			control_point_b_y:true		// SECOND CONTROL POINT Y WHEN USING BEZIER LINE TYPE (0=RANDOM, TRUE=USE POINT POSITION)		
	});
});